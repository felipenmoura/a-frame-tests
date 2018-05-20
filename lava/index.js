window.addEventListener('load', function () {
    var sceneEl = document.querySelector('a-scene');
    var cubes = Array.from(sceneEl.querySelectorAll('.cube'))
    cubes.forEach(cube => {
      // cube.on('click', cubeClicked)
      cube.addEventListener('click', cubeClicked);
      cube.addEventListener('mouseenter', cubeHovered);
      cube.addEventListener('mouseleave', cubeLeft);
    })
  })
  
  function cubeClicked () {
    // alert('OMG')
  }
  function cubeHovered () {
    this.firstElementChild.setAttribute('prev-color', this.firstElementChild.getAttribute('material').color)
    this.firstElementChild.setAttribute('material', 'color: #fff')
    // const anim = document.createElement('a-animation')
    // anim.id = "hover-animation-el"
    // anim.attribute = "material.color"
    // anim.dur="1000"
    // anim.from="#eef"
    // anim.to="#ccf"
    // anim.fill="forwards"
    // anim.easing="ease-in-out-quad"
    // anim.direction="alternate"
    // anim.repeat="indefinite"
    // this.firstElementChild.setAttribute('material', 'color: red')
    // this.firstElementChild.appendChild(anim)
  }
  function cubeLeft () {
    this.firstElementChild.setAttribute('material', 'color: ' + this.firstElementChild.getAttribute('prev-color'))
    // this.firstElementChild.removeChild(this.querySelector('#hover-animation-el'))
  }