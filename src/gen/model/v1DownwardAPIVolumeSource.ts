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
import { V1DownwardAPIVolumeFile } from './v1DownwardAPIVolumeFile';

/**
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
*/
export class V1DownwardAPIVolumeSource {
    /**
    * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * Items is a list of downward API volume file
    */
    'items'?: Array<V1DownwardAPIVolumeFile>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<V1DownwardAPIVolumeFile>"
        }    ];

    static getAttributeTypeMap() {
        return V1DownwardAPIVolumeSource.attributeTypeMap;
    }
}

