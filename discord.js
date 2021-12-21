const { default: axios } = require('axios');

let appId = '835270355480346635';
let publicKey = '060df06340dca0966e096f5eb37f40ec4b141186babcc487ca9ec01e3a55498b';
let botToken = 'ODM1MjcwMzU1NDgwMzQ2NjM1.YINAIw.Iw6gv9PkrSeM__MGm1iv1RXwtFY';

let url = `https://discord.com/api/v8/applications/${appId}/commands`

json = {
  'name': 'blep',
  'type': 1,
  'description': 'send something',
  'options': [
    {
      'name': 'animal',
      'description': 'some command',
      'type': 3,
      'required': true,
      'choices': [
        {
          'name': 'Dog',
          'value': 'animal_dog'
        },
        {
          'name': 'Cat',
          'value': 'cat'
        }
      ]
    }
  ]
}

headers = {
  'Authorization': `Bot ${botToken}`
}

axios.post(url, json, {
  headers: headers
}).then(t => console.log(t))