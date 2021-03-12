import axios, {AxiosInstance} from "axios";

const env = process.env;

export default class Api {
    readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: `//${env.API_URL}`
        });
    }
}