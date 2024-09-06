import { LightningElement } from 'lwc';

export default class RenderingListForEach extends LightningElement {

    contacts =[
                {
                    Id : 1,
                    Name: 'ABC',
                    Title:'Developer'
                },
                {
                    Id : 2,
                    Name: 'XYZ',
                    Title:'Manager'
                },
                {
                    Id : 3,
                    Name: 'PQR',
                    Title:'Developer'
                },
                {
                    Id : 4,
                    Name: 'LMK',
                    Title:'Manager'
                }
    ];
}