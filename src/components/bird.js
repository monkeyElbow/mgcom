// import {gsap, Reveal} from 'react-gsap';


function Bird() {


  // trying to change color on click
  const shapes = document.querySelectorAll('#chumbo');
  
  shapes.onclick = (e) => {
    console.log('hi')
  const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
  const rando = () => colors[Math.floor(Math.random() * colors.length)]
  document.documentElement.style.cssText =
  `.prefix__st2: ${rando()};`
}

  return (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      overflow="visible"
      
    >
      <style>
        {
          ".prefix__st2{fill:#ba330d}.prefix__st3{fill:#ba5b0d}.prefix__st4{fill:#e8b73c}.prefix__st5{fill:#ba1b0d}.prefix__st6{fill:#2d5a6d}"
        }

      </style>
      <path fill="#f9eed0" d="M0 0h1920v1080H0z" />
      <path fill="#6e4e2d" d="M588.2 478.4L1317.8 855 582.5 506z" />
      <ellipse
      id="chumbo"
        className="prefix__st2"
        cx={903.4}
        cy={533.3}
        rx={130.6}
        ry={102}
      />
      <path
        className="prefix__st2"
        d="M1127.9 571l-90.2-100.9L995 596.5zM864.4 225.5l-17.7 114.9 57.5-5.6z"
      />
      <path className="prefix__st3" d="M819.5 333.1l30.3-93.2-3.7 96.9z" />
      <path className="prefix__st2" d="M899.1 312.5l136.7 155.3-103.2-73z" />
      <path className="prefix__st3" d="M791.1 402.5l-39.5 79 50.3-40.4z" />
      <path
        className="prefix__st2"
        d="M801 398.9l4.9 36.8 124-34.6zM801 446.7l-35.1 30.1 3.6 30.5zM937.1 408l-39.6 18.7 48.3 8.7zM987.3 450.1l-43.5-39.4 7.3 24zM932.2 342.9l52.6 42.3-7.9 11.3zM1131.8 570.5l205 170.2-233.4-159.4z"
      />
      <path className="prefix__st3" d="M1049.3 586.4l30.1 20-8.6-22.3z" />
      <path
        className="prefix__st2"
        d="M1075.6 583.6l11.6-5.7 23.3 17.3zM991.8 386.1l-13.3 14 42.6 42.6z"
      />
      <path
        className="prefix__st3"
        d="M932.2 403.6l-123.9 33.2v31zM1035.8 469.7l-60.6-38.5 51.3 59.9z"
      />
      <path className="prefix__st4" d="M829.2 356.7l17.9 37.7-53.6-2.4z" />
      <path d="M903.1 337.7l-71.9 8.8 21.7 46.5z" />
      <path className="prefix__st3" d="M929.9 397.4l-25.1-57-44.1 54z" />
      <path className="prefix__st2" d="M826.1 344.9l-8.5 17.6-1.7-16.6z" />
      <path
        className="prefix__st4"
        d="M827.2 616.3l-15.3 38 23.4-33.2zM851.2 628.4l-15.9 32.4 5.8-37.2zM889.1 640.5l-15.9 32.4 5.8-37.2z"
      />
      <path
        className="prefix__st4"
        d="M826.9 650.7l10.1-30.3 4.8 2.8zM885.6 678.2l5-38.9 7.5 1.4zM899.5 679v-35.7l7.5-.1z"
      />
      <path className="prefix__st3" d="M1133 569.4l183.9 141.2L1123.3 578z" />
      <circle className="prefix__st5" cx={752} cy={703.9} r={14} />
      <circle className="prefix__st5" cx={693.1} cy={725.7} r={15} />
      <circle className="prefix__st5" cx={754.8} cy={607.6} r={16.9} />
      <circle className="prefix__st5" cx={993.6} cy={722.3} r={18.4} />
      <circle className="prefix__st5" cx={1140} cy={693.9} r={16.7} />
      <ellipse
        className="prefix__st5"
        cx={1016.9}
        cy={630.2}
        rx={17.1}
        ry={13.4}
      />
      <circle className="prefix__st5" cx={1228.1} cy={531.7} r={17.1} />
      <circle className="prefix__st5" cx={1206.5} cy={450.1} r={17.7} />
      <circle className="prefix__st6" cx={710.6} cy={578.6} r={8} />
      <circle className="prefix__st6" cx={716.3} cy={637.9} r={8.2} />
      <circle className="prefix__st6" cx={959.2} cy={669.9} r={9.1} />
      <circle className="prefix__st6" cx={1022.8} cy={666.4} r={10.8} />
      <circle className="prefix__st6" cx={1073.3} cy={698.9} r={9} />
      <circle className="prefix__st6" cx={1144} cy={455.9} r={9.2} />
      <ellipse className="prefix__st6" cx={1161} cy={421.7} rx={8.5} ry={11} />
      <circle className="prefix__st6" cx={1119.7} cy={417.3} r={9.2} />
      
      {/* <Reveal from={{ opacity: 0 }} duration={2}>
        <text transform="matrix(1 0 0 1 999 400)" 
      x="0" y="0" class="display-2 prefix__st4">
          <tspan>Welcome</tspan>
          </text>
</Reveal> */}

    </svg>

  )
}

export default Bird
