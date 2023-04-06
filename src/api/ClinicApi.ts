import { authorizedApi } from "../hooks/withAxiosIntercepted";
import {ClinicResponse} from "../models/api/ClinicResponse";
import {ClinicRequest} from "../models/api/ClinicRequest";

export class ClinicApi {
    static getClinicWhereWork = async () =>
        await authorizedApi.get<ClinicResponse[]>("/clinics/whereWork");

    static register = async (request:ClinicRequest) =>
        await authorizedApi.post("/clinics",request);

    static getMyClonics = async () =>
        await authorizedApi.get<ClinicResponse[]>("/clinics/myClinic");
}
