import 'reflect-metadata';

import JoinMatchingMap from '../types/JoinMatchingMap';


function Join(field1: string, argument1: string, field2: string, argument2: string) {
    return (target: ObjectConstructor, key: string) => {
        const fields: JoinMatchingMap = <JoinMatchingMap>Reflect.getMetadata('graphQLJoinData', target.constructor) || {};

        fields[key] = {
            field1,
            argument1,
            field2,
            argument2
        }

        Reflect.defineMetadata('graphQLJoinData', fields, target.constructor);
    }
}

export default Join;