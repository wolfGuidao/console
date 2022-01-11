// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package operator_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// SetTenantLogsOKCode is the HTTP code returned for type SetTenantLogsOK
const SetTenantLogsOKCode int = 200

/*SetTenantLogsOK A successful response.

swagger:response setTenantLogsOK
*/
type SetTenantLogsOK struct {

	/*
	  In: Body
	*/
	Payload bool `json:"body,omitempty"`
}

// NewSetTenantLogsOK creates SetTenantLogsOK with default headers values
func NewSetTenantLogsOK() *SetTenantLogsOK {

	return &SetTenantLogsOK{}
}

// WithPayload adds the payload to the set tenant logs o k response
func (o *SetTenantLogsOK) WithPayload(payload bool) *SetTenantLogsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the set tenant logs o k response
func (o *SetTenantLogsOK) SetPayload(payload bool) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SetTenantLogsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*SetTenantLogsDefault Generic error response.

swagger:response setTenantLogsDefault
*/
type SetTenantLogsDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewSetTenantLogsDefault creates SetTenantLogsDefault with default headers values
func NewSetTenantLogsDefault(code int) *SetTenantLogsDefault {
	if code <= 0 {
		code = 500
	}

	return &SetTenantLogsDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the set tenant logs default response
func (o *SetTenantLogsDefault) WithStatusCode(code int) *SetTenantLogsDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the set tenant logs default response
func (o *SetTenantLogsDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the set tenant logs default response
func (o *SetTenantLogsDefault) WithPayload(payload *models.Error) *SetTenantLogsDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the set tenant logs default response
func (o *SetTenantLogsDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SetTenantLogsDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
