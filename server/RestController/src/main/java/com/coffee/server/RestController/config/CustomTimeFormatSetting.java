package com.coffee.server.RestController.config;

import com.coffee.server.RestController.controller.timeFormatter.LocalDateFormatter;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CustomTimeFormatSetting implements WebMvcConfigurer {

    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addFormatter(new LocalDateFormatter());
    }
}
