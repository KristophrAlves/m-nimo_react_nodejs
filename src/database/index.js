import mongoose from "mongoose";

import config from "../config/database";

class Database {
    constructor() {
        this.connection = mongoose.connect(
            config.url,
            {
                //userNetUrlParser: true, - não funciona ativado.
               //userUnitFiedTopoloy: true, - não funciona ativado.
            }
        );
    }
}

export default new Database();