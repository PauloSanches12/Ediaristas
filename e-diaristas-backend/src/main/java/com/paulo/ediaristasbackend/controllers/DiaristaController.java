package com.paulo.ediaristasbackend.controllers;

import com.paulo.ediaristasbackend.models.Diarista;
import com.paulo.ediaristasbackend.repositories.DiaristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/admin/diaristas")
public class DiaristaController {

    @Autowired
    private DiaristaRepository repository;

    @GetMapping
    public ModelAndView listar() {
        var modelAndView = new ModelAndView("admin/diaristas/listar");

        modelAndView.addObject("diaristas", repository.findAll());

        return modelAndView;
    }

    @GetMapping("/cadastrar")
    public ModelAndView cadastrar() {
        var modelAndView = new ModelAndView("admin/diaristas/form");

        modelAndView.addObject("diarista", new Diarista());

        return  modelAndView;
    }

    @PostMapping("/cadastrar")
    public String cadastrar(Diarista diarista) {
        repository.save(diarista);

        return "redirect:/admin/diaristas";
    }
}
