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
import { V1alpha2NamedResourcesInstance } from './v1alpha2NamedResourcesInstance';

/**
* NamedResourcesResources is used in ResourceModel.
*/
export class V1alpha2NamedResourcesResources {
    /**
    * The list of all individual resources instances currently available.
    */
    'instances': Array<V1alpha2NamedResourcesInstance>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instances",
            "baseName": "instances",
            "type": "Array<V1alpha2NamedResourcesInstance>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha2NamedResourcesResources.attributeTypeMap;
    }
}

