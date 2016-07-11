<container>
  <h1>container</h1>

  <widget></widget>
  <script src="widget.js"></script>

  <script>
    riot.mount('widget')

    this.on('mount', function(){
      console.log('container mounting')
    })
  </script>
</container>
