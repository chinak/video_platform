package demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Think on 2017/3/18.
 */
@Controller
public class demoController {

    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String index(){
        return "index.html";
    }

}
