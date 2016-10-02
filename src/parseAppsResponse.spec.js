import { parseAppsResponse } from './onLoad';

describe('Given xml response from querying app info', () => {
    let actual;
    let xml;
    beforeEach(() => {
        xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <apps>
        <app id="31012" type="menu" version="1.6.8">Movie Store and TV Store</app>
        <app id="12" type="appl" version="4.2.132">Netflix</app>
    </apps>`;
        actual = parseAppsResponse(xml);
    });
    it('should return an array', () => {
        expect(actual).to.be.instanceOf(Array);
    });
    describe('When an array is returned', () => {
        it('should contain only objects', () => {
            expect(actual).to.have.all.instanceOf(Object);
        });
        it('should have objects that have an name, id, type, and version property', () => {
            for(var i = 0; i < actual.length; i++) {
                expect(actual[i]).to.have.all.keys(['name', 'id', 'type', 'version']);
            }
        });
    });
});
