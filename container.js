riot.tag2('container', '<h1>container</h1> <widget></widget>', '', '', function(opts) {
riot.tag2('widget', '<h1>widget</h1>', '', '', function(opts) {
    this.on('mount', function(){
      console.log('widget mounting')
    })
});

    riot.mount('widget')

    this.on('mount', function(){
      console.log('container mounting')
    })
});
