/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
*/
export class V1ManagedFieldsEntry {
    /**
    * APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
    */
    'apiVersion'?: string;
    /**
    * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: \"FieldsV1\"
    */
    'fieldsType'?: string;
    /**
    * FieldsV1 holds the first JSON version format as described in the \"FieldsV1\" type.
    */
    'fieldsV1'?: object;
    /**
    * Manager is an identifier of the workflow managing these fields.
    */
    'manager'?: string;
    /**
    * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \'Apply\' and \'Update\'.
    */
    'operation'?: string;
    /**
    * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
    */
    'subresource'?: string;
    /**
    * Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
    */
    'time'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "fieldsType",
            "baseName": "fieldsType",
            "type": "string"
        },
        {
            "name": "fieldsV1",
            "baseName": "fieldsV1",
            "type": "object"
        },
        {
            "name": "manager",
            "baseName": "manager",
            "type": "string"
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "subresource",
            "baseName": "subresource",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1ManagedFieldsEntry.attributeTypeMap;
    }
}

