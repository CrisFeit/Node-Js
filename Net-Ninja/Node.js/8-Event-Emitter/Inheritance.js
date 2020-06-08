const events = require('events');
const util   = require('util');

const Person = function(name){ this.name = name; }

util.inherits(Person , events.EventEmitter);

const athena  = new Person('Athena Asamiya');
const robert  = new Person('Robert Garcia');
const terry   = new Person('Terry Bogard');
const mary    = new Person('Blue Mary');
const billy   = new Person('Billy Kane');

let people    = [athena, robert , terry, mary ,billy];

people.forEach((person)=> {
  person.on('powers' , function(power){
    console.log(`${person.name} attack: ${power}`)
  });
});

athena.emit('powers' , 'Psychokinesis');
terry.emit('powers'  , 'Power Geyser');
robert.emit('powers' , 'Gather chi');


