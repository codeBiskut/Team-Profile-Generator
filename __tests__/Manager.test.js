const Manager = require('../lib/Manager')
describe('Manager', () => {
    describe("test properties of Manager", () => {
        it("test all properties", () => {
            const manager = new Manager('Josh', 1, 'josh.rinehart.2k@gmail.com', 234)
    
            expect(manager.name).toEqual('Josh')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('josh.rinehart.2k@gmail.com')
            expect(manager.officeNumber).toEqual(234)
        })
    })
    
    describe("test all methods of Manager", () => {
        it("test all methods", () => {
            const manager = new Manager('Josh', 1, 'josh.rinehart.2k@gmail.com', 234)

            expect(manager.getName()).toEqual('Josh')
            expect(manager.getId()).toEqual(1)
            expect(manager.getEmail()).toEqual('josh.rinehart.2k@gmail.com')
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})