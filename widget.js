riot.tag2('widget', '<h1>widget</h1>', '', '', function(opts) {
    this.on('mount', function(){
      console.log('widget mounting')
    })
});
