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
import { V1NodeSelectorTerm } from './v1NodeSelectorTerm';

/**
* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
*/
export class V1NodeSelector {
    /**
    * Required. A list of node selector terms. The terms are ORed.
    */
    'nodeSelectorTerms': Array<V1NodeSelectorTerm>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nodeSelectorTerms",
            "baseName": "nodeSelectorTerms",
            "type": "Array<V1NodeSelectorTerm>"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSelector.attributeTypeMap;
    }
}

