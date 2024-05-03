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
import { V1LabelSelector } from './v1LabelSelector';

/**
* ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
*/
export class V1alpha1ParamRef {
    /**
    * `name` is the name of the resource being referenced.  `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.
    */
    'name'?: string;
    /**
    * namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.  A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.  - If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.  - If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.
    */
    'namespace'?: string;
    /**
    * `parameterNotFoundAction` controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.  Allowed values are `Allow` or `Deny` Default to `Deny`
    */
    'parameterNotFoundAction'?: string;
    'selector'?: V1LabelSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "parameterNotFoundAction",
            "baseName": "parameterNotFoundAction",
            "type": "string"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1ParamRef.attributeTypeMap;
    }
}

