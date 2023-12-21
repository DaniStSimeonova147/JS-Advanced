let { Repository } = require("./solution.js");

const { expect } = require("chai");

describe("Tests …", function () {
    let repository;

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    beforeEach(function () {
        repository = new Repository(properties);
    });

    describe('constructor tests', function () {
        it('properties tests', function () {
            expect(repository.props).to.deep.equal({
                name: "string",
                age: "number",
                birthday: "object"
            });
        });
        it('getter test', function () {
          
            expect(repository.data.size).to.equal(0);
        });
    });

    describe('add() tests', function () {
        it('correctly tests', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            const outputMsg =   repository.add(entity);

            expect(outputMsg).to.equal(0);

        });
        it('not correclte test', function () {
            let entity = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)
            };

            const errorMsg = () => repository.add(entity);

            expect(errorMsg).to.throw(Error, "Property age is missing from the entity!")
        });
        it('not correclte test', function () {
            let entity = {
                name: 5,
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            const errorMsg = () => repository.add(entity);

            expect(errorMsg).to.throw(TypeError, "Property name is not of correct type!")
        });
    });
    describe('getid() tests', function () {
        it('correctly tests', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            let outputMsg = repository.getId(0);

            expect(outputMsg).to.equal(repository.getId(0));

        });
        it('not correclte test', function () {
            let errorMsg = () => repository.getId(0) 

            expect(errorMsg).to.throw(Error, 'Entity with id: 0 does not exist!')
        });
    });
    describe('update() tests', function () {
        it('correctly tests', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
           repository.update(0, entity2);

           expect(repository.data.set[0]).to.equal( {
            name: 'Gosho',
            age: 22,
            birthday: new Date(1998, 0, 7)
        })
           expect(repository.data.size).to.equal(1);
            expect(entity2).to.equal(repository.getId(0));
             
        });
        it('not correclte test', function () {
            let errorMsg = () => repository.getId(0) 

            expect(errorMsg).to.throw(Error, 'Entity with id: 0 does not exist!')
        });
    });
    describe('del() tests', function () {
        it('correctly tests', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity);
           
            repository.del(1);

              expect(repository.data.size).to.equal(1);
            expect(entity).to.equal(repository.getId(0));

        });
        it('not correclte test', function () {
            let errorMsg = () => repository.getId(0) 

            expect(errorMsg).to.throw(Error, 'Entity with id: 0 does not exist!')
        });
    });
});
