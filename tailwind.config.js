/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        colorChange: 'colorChange 3s ease-in-out infinite',
      },
      colors: {
        'palette-purple': '#5D0081',
        'palette-pink': '#AA00ED',
        'palette-blue': {
          DEFAULT: 'rgba(11, 0, 128, 1)',
          '25': 'rgba(11, 0, 128, 0.25)'
        },
        'palette-lapis': '#6C5EFF'
      },
      fontSize: {
        '1vh': '1vh', '2vh': '2vh', '3vh': '3vh', '4vh': '4vh', '5vh': '5vh', '6vh': '6vh', '7vh': '7vh', '8vh': '8vh', '9vh': '9vh', '10vh': '10vh', '11vh': '11vh', '12vh': '12vh', '13vh': '13vh', '14vh': '14vh', '15vh': '15vh', '16vh': '16vh', '17vh': '17vh', '18vh': '18vh', '19vh': '19vh', '20vh': '20vh', '21vh': '21vh', '22vh': '22vh', '23vh': '23vh', '24vh': '24vh', '25vh': '25vh', '26vh': '26vh', '27vh': '27vh', '28vh': '28vh', '29vh': '29vh', '30vh': '30vh', '31vh': '31vh', '32vh': '32vh', '33vh': '33vh', '34vh': '34vh', '35vh': '35vh', '36vh': '36vh', '37vh': '37vh', '38vh': '38vh', '39vh': '39vh', '40vh': '40vh', '41vh': '41vh', '42vh': '42vh', '43vh': '43vh', '44vh': '44vh', '45vh': '45vh', '46vh': '46vh', '47vh': '47vh', '48vh': '48vh', '49vh': '49vh', '50vh': '50vh', '51vh': '51vh', '52vh': '52vh', '53vh': '53vh', '54vh': '54vh', '55vh': '55vh', '56vh': '56vh', '57vh': '57vh', '58vh': '58vh', '59vh': '59vh', '60vh': '60vh', '61vh': '61vh', '62vh': '62vh', '63vh': '63vh', '64vh': '64vh', '65vh': '65vh', '66vh': '66vh', '67vh': '67vh', '68vh': '68vh', '69vh': '69vh', '70vh': '70vh', '71vh': '71vh', '72vh': '72vh', '73vh': '73vh', '74vh': '74vh', '75vh': '75vh', '76vh': '76vh', '77vh': '77vh', '78vh': '78vh', '79vh': '79vh', '80vh': '80vh', '81vh': '81vh', '82vh': '82vh', '83vh': '83vh', '84vh': '84vh', '85vh': '85vh', '86vh': '86vh', '87vh': '87vh', '88vh': '88vh', '89vh': '89vh', '90vh': '90vh', '91vh': '91vh', '92vh': '92vh', '93vh': '93vh', '94vh': '94vh', '95vh': '95vh', '96vh': '96vh', '97vh': '97vh', '98vh': '98vh', '99vh': '99vh', '100vh': '100vh', '1vw': '1vw', '2vw': '2vw', '3vw': '3vw', '4vw': '4vw', '5vw': '5vw', '6vw': '6vw', '7vw': '7vw', '8vw': '8vw', '9vw': '9vw', '10vw': '10vw', '11vw': '11vw', '12vw': '12vw', '13vw': '13vw', '14vw': '14vw', '15vw': '15vw', '16vw': '16vw', '17vw': '17vw', '18vw': '18vw', '19vw': '19vw', '20vw': '20vw', '21vw': '21vw', '22vw': '22vw', '23vw': '23vw', '24vw': '24vw', '25vw': '25vw', '26vw': '26vw', '27vw': '27vw', '28vw': '28vw', '29vw': '29vw', '30vw': '30vw', '31vw': '31vw', '32vw': '32vw', '33vw': '33vw', '34vw': '34vw', '35vw': '35vw', '36vw': '36vw', '37vw': '37vw', '38vw': '38vw', '39vw': '39vw', '40vw': '40vw', '41vw': '41vw', '42vw': '42vw', '43vw': '43vw', '44vw': '44vw', '45vw': '45vw', '46vw': '46vw', '47vw': '47vw', '48vw': '48vw', '49vw': '49vw', '50vw': '50vw', '51vw': '51vw', '52vw': '52vw', '53vw': '53vw', '54vw': '54vw', '55vw': '55vw', '56vw': '56vw', '57vw': '57vw', '58vw': '58vw', '59vw': '59vw', '60vw': '60vw', '61vw': '61vw', '62vw': '62vw', '63vw': '63vw', '64vw': '64vw', '65vw': '65vw', '66vw': '66vw', '67vw': '67vw', '68vw': '68vw', '69vw': '69vw', '70vw': '70vw', '71vw': '71vw', '72vw': '72vw', '73vw': '73vw', '74vw': '74vw', '75vw': '75vw', '76vw': '76vw', '77vw': '77vw', '78vw': '78vw', '79vw': '79vw', '80vw': '80vw', '81vw': '81vw', '82vw': '82vw', '83vw': '83vw', '84vw': '84vw', '85vw': '85vw', '86vw': '86vw', '87vw': '87vw', '88vw': '88vw', '89vw': '89vw', '90vw': '90vw', '91vw': '91vw', '92vw': '92vw', '93vw': '93vw', '94vw': '94vw', '95vw': '95vw', '96vw': '96vw', '97vw': '97vw', '98vw': '98vw', '99vw': '99vw', '100vw': '100vw',
        '1vmin': '1vmin', '2vmin': '2vmin', '3vmin': '3vmin', '4vmin': '4vmin', '5vmin': '5vmin', '6vmin': '6vmin', '7vmin': '7vmin', '8vmin': '8vmin', '9vmin': '9vmin', '10vmin': '10vmin', '11vmin': '11vmin', '12vmin': '12vmin', '13vmin': '13vmin', '14vmin': '14vmin', '15vmin': '15vmin', '16vmin': '16vmin', '17vmin': '17vmin', '18vmin': '18vmin', '19vmin': '19vmin', '20vmin': '20vmin', '21vmin': '21vmin', '22vmin': '22vmin', '23vmin': '23vmin', '24vmin': '24vmin', '25vmin': '25vmin', '26vmin': '26vmin', '27vmin': '27vmin', '28vmin': '28vmin', '29vmin': '29vmin', '30vmin': '30vmin', '31vmin': '31vmin', '32vmin': '32vmin', '33vmin': '33vmin', '34vmin': '34vmin', '35vmin': '35vmin', '36vmin': '36vmin', '37vmin': '37vmin', '38vmin': '38vmin', '39vmin': '39vmin', '40vmin': '40vmin', '41vmin': '41vmin', '42vmin': '42vmin', '43vmin': '43vmin', '44vmin': '44vmin', '45vmin': '45vmin', '46vmin': '46vmin', '47vmin': '47vmin', '48vmin': '48vmin', '49vmin': '49vmin', '50vmin': '50vmin', '51vmin': '51vmin', '52vmin': '52vmin', '53vmin': '53vmin', '54vmin': '54vmin', '55vmin': '55vmin', '56vmin': '56vmin', '57vmin': '57vmin', '58vmin': '58vmin', '59vmin': '59vmin', '60vmin': '60vmin', '61vmin': '61vmin', '62vmin': '62vmin', '63vmin': '63vmin', '64vmin': '64vmin', '65vmin': '65vmin', '66vmin': '66vmin', '67vmin': '67vmin', '68vmin': '68vmin', '69vmin': '69vmin', '70vmin': '70vmin', '71vmin': '71vmin', '72vmin': '72vmin', '73vmin': '73vmin', '74vmin': '74vmin', '75vmin': '75vmin', '76vmin': '76vmin', '77vmin': '77vmin', '78vmin': '78vmin', '79vmin': '79vmin', '80vmin': '80vmin', '81vmin': '81vmin', '82vmin': '82vmin', '83vmin': '83vmin', '84vmin': '84vmin', '85vmin': '85vmin', '86vmin': '86vmin', '87vmin': '87vmin', '88vmin': '88vmin', '89vmin': '89vmin', '90vmin': '90vmin', '91vmin': '91vmin', '92vmin': '92vmin', '93vmin': '93vmin', '94vmin': '94vmin', '95vmin': '95vmin', '96vmin': '96vmin', '97vmin': '97vmin', '98vmin': '98vmin', '99vmin': '99vmin', '100vmin': '100vmin', '1vmax': '1vmax', '2vmax': '2vmax', '3vmax': '3vmax', '4vmax': '4vmax', '5vmax': '5vmax', '6vmax': '6vmax', '7vmax': '7vmax', '8vmax': '8vmax', '9vmax': '9vmax', '10vmax': '10vmax', '11vmax': '11vmax', '12vmax': '12vmax', '13vmax': '13vmax', '14vmax': '14vmax', '15vmax': '15vmax', '16vmax': '16vmax', '17vmax': '17vmax', '18vmax': '18vmax', '19vmax': '19vmax', '20vmax': '20vmax', '21vmax': '21vmax', '22vmax': '22vmax', '23vmax': '23vmax', '24vmax': '24vmax', '25vmax': '25vmax', '26vmax': '26vmax', '27vmax': '27vmax', '28vmax': '28vmax', '29vmax': '29vmax', '30vmax': '30vmax', '31vmax': '31vmax', '32vmax': '32vmax', '33vmax': '33vmax', '34vmax': '34vmax', '35vmax': '35vmax', '36vmax': '36vmax', '37vmax': '37vmax', '38vmax': '38vmax', '39vmax': '39vmax', '40vmax': '40vmax', '41vmax': '41vmax', '42vmax': '42vmax', '43vmax': '43vmax', '44vmax': '44vmax', '45vmax': '45vmax', '46vmax': '46vmax', '47vmax': '47vmax', '48vmax': '48vmax', '49vmax': '49vmax', '50vmax': '50vmax', '51vmax': '51vmax', '52vmax': '52vmax', '53vmax': '53vmax', '54vmax': '54vmax', '55vmax': '55vmax', '56vmax': '56vmax', '57vmax': '57vmax', '58vmax': '58vmax', '59vmax': '59vmax', '60vmax': '60vmax', '61vmax': '61vmax', '62vmax': '62vmax', '63vmax': '63vmax', '64vmax': '64vmax', '65vmax': '65vmax', '66vmax': '66vmax', '67vmax': '67vmax', '68vmax': '68vmax', '69vmax': '69vmax', '70vmax': '70vmax', '71vmax': '71vmax', '72vmax': '72vmax', '73vmax': '73vmax', '74vmax': '74vmax', '75vmax': '75vmax', '76vmax': '76vmax', '77vmax': '77vmax', '78vmax': '78vmax', '79vmax': '79vmax', '80vmax': '80vmax', '81vmax': '81vmax', '82vmax': '82vmax', '83vmax': '83vmax', '84vmax': '84vmax', '85vmax': '85vmax', '86vmax': '86vmax', '87vmax': '87vmax', '88vmax': '88vmax', '89vmax': '89vmax', '90vmax': '90vmax', '91vmax': '91vmax', '92vmax': '92vmax', '93vmax': '93vmax', '94vmax': '94vmax', '95vmax': '95vmax', '96vmax': '96vmax', '97vmax': '97vmax', '98vmax': '98vmax', '99vmax': '99vmax', '100vmax': '100vmax',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
        
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#ff0000' },
          '50%': { color : '#0000ff' }
        }
      },
      spacing: {
        '1vh': '1vh', '2vh': '2vh', '3vh': '3vh', '4vh': '4vh', '5vh': '5vh', '6vh': '6vh', '7vh': '7vh', '8vh': '8vh', '9vh': '9vh', '10vh': '10vh', '11vh': '11vh', '12vh': '12vh', '13vh': '13vh', '14vh': '14vh', '15vh': '15vh', '16vh': '16vh', '17vh': '17vh', '18vh': '18vh', '19vh': '19vh', '20vh': '20vh', '21vh': '21vh', '22vh': '22vh', '23vh': '23vh', '24vh': '24vh', '25vh': '25vh', '26vh': '26vh', '27vh': '27vh', '28vh': '28vh', '29vh': '29vh', '30vh': '30vh', '31vh': '31vh', '32vh': '32vh', '33vh': '33vh', '34vh': '34vh', '35vh': '35vh', '36vh': '36vh', '37vh': '37vh', '38vh': '38vh', '39vh': '39vh', '40vh': '40vh', '41vh': '41vh', '42vh': '42vh', '43vh': '43vh', '44vh': '44vh', '45vh': '45vh', '46vh': '46vh', '47vh': '47vh', '48vh': '48vh', '49vh': '49vh', '50vh': '50vh', '51vh': '51vh', '52vh': '52vh', '53vh': '53vh', '54vh': '54vh', '55vh': '55vh', '56vh': '56vh', '57vh': '57vh', '58vh': '58vh', '59vh': '59vh', '60vh': '60vh', '61vh': '61vh', '62vh': '62vh', '63vh': '63vh', '64vh': '64vh', '65vh': '65vh', '66vh': '66vh', '67vh': '67vh', '68vh': '68vh', '69vh': '69vh', '70vh': '70vh', '71vh': '71vh', '72vh': '72vh', '73vh': '73vh', '74vh': '74vh', '75vh': '75vh', '76vh': '76vh', '77vh': '77vh', '78vh': '78vh', '79vh': '79vh', '80vh': '80vh', '81vh': '81vh', '82vh': '82vh', '83vh': '83vh', '84vh': '84vh', '85vh': '85vh', '86vh': '86vh', '87vh': '87vh', '88vh': '88vh', '89vh': '89vh', '90vh': '90vh', '91vh': '91vh', '92vh': '92vh', '93vh': '93vh', '94vh': '94vh', '95vh': '95vh', '96vh': '96vh', '97vh': '97vh', '98vh': '98vh', '99vh': '99vh', '100vh': '100vh', '1vw': '1vw', '2vw': '2vw', '3vw': '3vw', '4vw': '4vw', '5vw': '5vw', '6vw': '6vw', '7vw': '7vw', '8vw': '8vw', '9vw': '9vw', '10vw': '10vw', '11vw': '11vw', '12vw': '12vw', '13vw': '13vw', '14vw': '14vw', '15vw': '15vw', '16vw': '16vw', '17vw': '17vw', '18vw': '18vw', '19vw': '19vw', '20vw': '20vw', '21vw': '21vw', '22vw': '22vw', '23vw': '23vw', '24vw': '24vw', '25vw': '25vw', '26vw': '26vw', '27vw': '27vw', '28vw': '28vw', '29vw': '29vw', '30vw': '30vw', '31vw': '31vw', '32vw': '32vw', '33vw': '33vw', '34vw': '34vw', '35vw': '35vw', '36vw': '36vw', '37vw': '37vw', '38vw': '38vw', '39vw': '39vw', '40vw': '40vw', '41vw': '41vw', '42vw': '42vw', '43vw': '43vw', '44vw': '44vw', '45vw': '45vw', '46vw': '46vw', '47vw': '47vw', '48vw': '48vw', '49vw': '49vw', '50vw': '50vw', '51vw': '51vw', '52vw': '52vw', '53vw': '53vw', '54vw': '54vw', '55vw': '55vw', '56vw': '56vw', '57vw': '57vw', '58vw': '58vw', '59vw': '59vw', '60vw': '60vw', '61vw': '61vw', '62vw': '62vw', '63vw': '63vw', '64vw': '64vw', '65vw': '65vw', '66vw': '66vw', '67vw': '67vw', '68vw': '68vw', '69vw': '69vw', '70vw': '70vw', '71vw': '71vw', '72vw': '72vw', '73vw': '73vw', '74vw': '74vw', '75vw': '75vw', '76vw': '76vw', '77vw': '77vw', '78vw': '78vw', '79vw': '79vw', '80vw': '80vw', '81vw': '81vw', '82vw': '82vw', '83vw': '83vw', '84vw': '84vw', '85vw': '85vw', '86vw': '86vw', '87vw': '87vw', '88vw': '88vw', '89vw': '89vw', '90vw': '90vw', '91vw': '91vw', '92vw': '92vw', '93vw': '93vw', '94vw': '94vw', '95vw': '95vw', '96vw': '96vw', '97vw': '97vw', '98vw': '98vw', '99vw': '99vw', '100vw': '100vw',
        '1vmin': '1vmin', '2vmin': '2vmin', '3vmin': '3vmin', '4vmin': '4vmin', '5vmin': '5vmin', '6vmin': '6vmin', '7vmin': '7vmin', '8vmin': '8vmin', '9vmin': '9vmin', '10vmin': '10vmin', '11vmin': '11vmin', '12vmin': '12vmin', '13vmin': '13vmin', '14vmin': '14vmin', '15vmin': '15vmin', '16vmin': '16vmin', '17vmin': '17vmin', '18vmin': '18vmin', '19vmin': '19vmin', '20vmin': '20vmin', '21vmin': '21vmin', '22vmin': '22vmin', '23vmin': '23vmin', '24vmin': '24vmin', '25vmin': '25vmin', '26vmin': '26vmin', '27vmin': '27vmin', '28vmin': '28vmin', '29vmin': '29vmin', '30vmin': '30vmin', '31vmin': '31vmin', '32vmin': '32vmin', '33vmin': '33vmin', '34vmin': '34vmin', '35vmin': '35vmin', '36vmin': '36vmin', '37vmin': '37vmin', '38vmin': '38vmin', '39vmin': '39vmin', '40vmin': '40vmin', '41vmin': '41vmin', '42vmin': '42vmin', '43vmin': '43vmin', '44vmin': '44vmin', '45vmin': '45vmin', '46vmin': '46vmin', '47vmin': '47vmin', '48vmin': '48vmin', '49vmin': '49vmin', '50vmin': '50vmin', '51vmin': '51vmin', '52vmin': '52vmin', '53vmin': '53vmin', '54vmin': '54vmin', '55vmin': '55vmin', '56vmin': '56vmin', '57vmin': '57vmin', '58vmin': '58vmin', '59vmin': '59vmin', '60vmin': '60vmin', '61vmin': '61vmin', '62vmin': '62vmin', '63vmin': '63vmin', '64vmin': '64vmin', '65vmin': '65vmin', '66vmin': '66vmin', '67vmin': '67vmin', '68vmin': '68vmin', '69vmin': '69vmin', '70vmin': '70vmin', '71vmin': '71vmin', '72vmin': '72vmin', '73vmin': '73vmin', '74vmin': '74vmin', '75vmin': '75vmin', '76vmin': '76vmin', '77vmin': '77vmin', '78vmin': '78vmin', '79vmin': '79vmin', '80vmin': '80vmin', '81vmin': '81vmin', '82vmin': '82vmin', '83vmin': '83vmin', '84vmin': '84vmin', '85vmin': '85vmin', '86vmin': '86vmin', '87vmin': '87vmin', '88vmin': '88vmin', '89vmin': '89vmin', '90vmin': '90vmin', '91vmin': '91vmin', '92vmin': '92vmin', '93vmin': '93vmin', '94vmin': '94vmin', '95vmin': '95vmin', '96vmin': '96vmin', '97vmin': '97vmin', '98vmin': '98vmin', '99vmin': '99vmin', '100vmin': '100vmin', '1vmax': '1vmax', '2vmax': '2vmax', '3vmax': '3vmax', '4vmax': '4vmax', '5vmax': '5vmax', '6vmax': '6vmax', '7vmax': '7vmax', '8vmax': '8vmax', '9vmax': '9vmax', '10vmax': '10vmax', '11vmax': '11vmax', '12vmax': '12vmax', '13vmax': '13vmax', '14vmax': '14vmax', '15vmax': '15vmax', '16vmax': '16vmax', '17vmax': '17vmax', '18vmax': '18vmax', '19vmax': '19vmax', '20vmax': '20vmax', '21vmax': '21vmax', '22vmax': '22vmax', '23vmax': '23vmax', '24vmax': '24vmax', '25vmax': '25vmax', '26vmax': '26vmax', '27vmax': '27vmax', '28vmax': '28vmax', '29vmax': '29vmax', '30vmax': '30vmax', '31vmax': '31vmax', '32vmax': '32vmax', '33vmax': '33vmax', '34vmax': '34vmax', '35vmax': '35vmax', '36vmax': '36vmax', '37vmax': '37vmax', '38vmax': '38vmax', '39vmax': '39vmax', '40vmax': '40vmax', '41vmax': '41vmax', '42vmax': '42vmax', '43vmax': '43vmax', '44vmax': '44vmax', '45vmax': '45vmax', '46vmax': '46vmax', '47vmax': '47vmax', '48vmax': '48vmax', '49vmax': '49vmax', '50vmax': '50vmax', '51vmax': '51vmax', '52vmax': '52vmax', '53vmax': '53vmax', '54vmax': '54vmax', '55vmax': '55vmax', '56vmax': '56vmax', '57vmax': '57vmax', '58vmax': '58vmax', '59vmax': '59vmax', '60vmax': '60vmax', '61vmax': '61vmax', '62vmax': '62vmax', '63vmax': '63vmax', '64vmax': '64vmax', '65vmax': '65vmax', '66vmax': '66vmax', '67vmax': '67vmax', '68vmax': '68vmax', '69vmax': '69vmax', '70vmax': '70vmax', '71vmax': '71vmax', '72vmax': '72vmax', '73vmax': '73vmax', '74vmax': '74vmax', '75vmax': '75vmax', '76vmax': '76vmax', '77vmax': '77vmax', '78vmax': '78vmax', '79vmax': '79vmax', '80vmax': '80vmax', '81vmax': '81vmax', '82vmax': '82vmax', '83vmax': '83vmax', '84vmax': '84vmax', '85vmax': '85vmax', '86vmax': '86vmax', '87vmax': '87vmax', '88vmax': '88vmax', '89vmax': '89vmax', '90vmax': '90vmax', '91vmax': '91vmax', '92vmax': '92vmax', '93vmax': '93vmax', '94vmax': '94vmax', '95vmax': '95vmax', '96vmax': '96vmax', '97vmax': '97vmax', '98vmax': '98vmax', '99vmax': '99vmax', '100vmax': '100vmax',      
      },
      zIndex: {
        '1': '1','2': '2','3': '3','4': '4','5': '5','6': '6','7': '7','8': '8','9': '9','10': '10','11': '11','12': '12','13': '13','14': '14','15': '15','16': '16','17': '17','18': '18','19': '19','20': '20','21': '21','22': '22','23': '23','24': '24','25': '25','26': '26','27': '27','28': '28','29': '29','30': '30','31': '31','32': '32','33': '33','34': '34','35': '35','36': '36','37': '37','38': '38','39': '39','40': '40','41': '41','42': '42','43': '43','44': '44','45': '45','46': '46','47': '47','48': '48','49': '49','50': '50','51': '51','52': '52','53': '53','54': '54','55': '55','56': '56','57': '57','58': '58','59': '59','60': '60','61': '61','62': '62','63': '63','64': '64','65': '65','66': '66','67': '67','68': '68','69': '69','70': '70','71': '71','72': '72','73': '73','74': '74','75': '75','76': '76','77': '77','78': '78','79': '79','80': '80','81': '81','82': '82','83': '83','84': '84','85': '85','86': '86','87': '87','88': '88','89': '89','90': '90','91': '91','92': '92','93': '93','94': '94','95': '95','96': '96','97': '97','98': '98','99': '99','100': '100',
      }
    },
  },
  plugins: [],
}

