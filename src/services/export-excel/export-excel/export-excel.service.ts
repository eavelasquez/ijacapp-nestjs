import { Injectable } from '@nestjs/common';
import { parseAsync, parse } from 'json2csv';
import * as fs from 'fs';


@Injectable()
export class ExportExcelService {

    convetTpCsv(array: any[]) {

        let aa = { nombre: 'ddd', documento: { tipo: 'cc', numero: 12323 } };

        let bb = { ...aa, ...aa.documento }
        delete bb.documento;
        console.log(bb);
        return parse(array);
    }

    async saveFile(data: string, name: string) {
        let ss = '';
        await fs.writeFile(`files/${name}.csv`, data, (err) => {
            return 'File is created successfully.';
        });
        var convertapi = require('convertapi')('qybU4LrFCO9IycKy');
        return convertapi.convert('xls', {
            File: `files/${name}.csv`
        }, 'csv')
        return ss;

    }
}
