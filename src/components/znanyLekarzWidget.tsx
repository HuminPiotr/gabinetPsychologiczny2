import React, {useEffect} from 'react';

const ZnanyLekarzWidget = () => {
const scriptFunction = ($_x,_s,id) => {
    var js,fjs=$_x.getElementsByTagName(_s)[0];
    if(!$_x.getElementById(id))
        {
            js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";
             fjs.parentNode.insertBefore(js,fjs);
        }
    }

    useEffect (() =>{
        scriptFunction(document, "body", "zl-widget-s");

    },[])

    return (
        <a id="zl-url" className="zl-url" href="https://www.znanylekarz.pl/anna-humin/psycholog/biala-podlaska" rel="nofollow" data-zlw-doctor="anna-humin" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true">Anna Humin - ZnanyLekarz.pl</a>
    )
}

export default ZnanyLekarzWidget;
