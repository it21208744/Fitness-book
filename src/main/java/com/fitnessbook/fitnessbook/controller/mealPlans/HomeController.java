package com.fitnessbook.fitnessbook.controller.mealPlans;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home(){
        return "Hello home";
    }

    @GetMapping("/secured")
    public RedirectView secured(){
        return new RedirectView("http://localhost:5173/homeLayout");
    }
}
