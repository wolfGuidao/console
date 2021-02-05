import React, { useState } from "react";
import ModalWrapper from "../../Common/ModalWrapper/ModalWrapper";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { modalBasic } from "../../Common/FormComponents/common/styleLibrary";
import InputBoxWrapper from "../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import Grid from "@material-ui/core/Grid";
import { generatePoolName, niceBytes } from "../../../../common/utils";
import { Button, LinearProgress } from "@material-ui/core";
import api from "../../../../common/api";
import { IAddPoolRequest, ITenant } from "../ListTenants/types";
import { IAffinityModel } from "../../../../common/types";
import { getHardcodedAffinity } from "./utils";

interface IAddPoolProps {
  tenant: ITenant;
  classes: any;
  open: boolean;
  onClosePoolAndReload: (shouldReload: boolean) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      textAlign: "right",
    },
    multiContainer: {
      display: "flex",
      alignItems: "center" as const,
      justifyContent: "flex-start" as const,
    },
    sizeFactorContainer: {
      marginLeft: 8,
    },
    bottomContainer: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      "& div": {
        flexGrow: 1,
        width: "100%",
      },
    },
    factorElements: {
      display: "flex",
      justifyContent: "flex-start",
    },
    sizeNumber: {
      fontSize: 35,
      fontWeight: 700,
      textAlign: "center",
    },
    sizeDescription: {
      fontSize: 14,
      color: "#777",
      textAlign: "center",
    },
    ...modalBasic,
  });

const AddPoolModal = ({
  tenant,
  classes,
  open,
  onClosePoolAndReload,
}: IAddPoolProps) => {
  const [addSending, setAddSending] = useState<boolean>(false);
  const [numberOfNodes, setNumberOfNodes] = useState<number>(0);
  const [volumeSize, setVolumeSize] = useState<number>(0);
  const [volumesPerServer, setVolumesPerSever] = useState<number>(0);

  const instanceCapacity: number = volumeSize * 1073741824 * volumesPerServer;
  const totalCapacity: number = instanceCapacity * numberOfNodes;

  return (
    <ModalWrapper
      onClose={() => onClosePoolAndReload(false)}
      modalOpen={open}
      title="Add Pool"
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setAddSending(true);

          const poolName = generatePoolName(tenant.pools);

          const hardCodedAffinity: IAffinityModel = getHardcodedAffinity(
            tenant.name,
            poolName
          );

          const data: IAddPoolRequest = {
            name: poolName,
            servers: numberOfNodes,
            volumes_per_server: volumesPerServer,
            volume_configuration: {
              size: volumeSize * 1073741824,
              storage_class: "",
              labels: null,
            },
            affinity: hardCodedAffinity,
          };

          api
            .invoke(
              "POST",
              `/api/v1/namespaces/${tenant.namespace}/tenants/${tenant.name}/pools`,
              data
            )
            .then(() => {
              setAddSending(false);
              onClosePoolAndReload(true);
            })
            .catch((err) => {
              setAddSending(false);
              // setDeleteError(err);
            });
        }}
      >
        <Grid item xs={12}>
          <InputBoxWrapper
            id="number_of_nodes"
            name="number_of_nodes"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNumberOfNodes(parseInt(e.target.value));
            }}
            label="Number o Nodes"
            value={numberOfNodes.toString(10)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputBoxWrapper
            id="pool_size"
            name="pool_size"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setVolumeSize(parseInt(e.target.value));
            }}
            label="Volume Size (Gi)"
            value={volumeSize.toString(10)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputBoxWrapper
            id="volumes_per_sever"
            name="volumes_per_sever"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setVolumesPerSever(parseInt(e.target.value));
            }}
            label="Volumes per Server"
            value={volumesPerServer.toString(10)}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12} className={classes.bottomContainer}>
            <div className={classes.factorElements}>
              <div>
                <div className={classes.sizeNumber}>
                  {niceBytes(instanceCapacity.toString(10))}
                </div>
                <div className={classes.sizeDescription}>Instance Capacity</div>
              </div>
              <div>
                <div className={classes.sizeNumber}>
                  {niceBytes(totalCapacity.toString(10))}
                </div>
                <div className={classes.sizeDescription}>Total Capacity</div>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={addSending}
              >
                Save
              </Button>
            </div>
          </Grid>
          {addSending && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )}
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default withStyles(styles)(AddPoolModal);
