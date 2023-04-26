/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* BoundObjectReference is a reference to an object that a token is bound to.
*/
export class V1BoundObjectReference {
    /**
    * API version of the referent.
    */
    'apiVersion'?: string;
    /**
    * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
    */
    'kind'?: string;
    /**
    * Name of the referent.
    */
    'name'?: string;
    /**
    * UID of the referent.
    */
    'uid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1BoundObjectReference.attributeTypeMap;
    }

    public constructor() {
    }
}
