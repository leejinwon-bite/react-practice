package com.coffee.server.RestController.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration
public class CustomCORSSetting implements WebMvcConfigurer {

    // CORS 리액트-서버 통신 제한 풀기 위한 설정 메소드입니다.
    //     CORS 설정을 추가할 수 있는 메소드들을 오버라이드 할 수 있습니다.
    //     예를 들어, addCorsMappings 메소드를 오버라이드하여 CORS 매핑을 추가할 수 있습니다.
     @Override
     public void addCorsMappings(CorsRegistry registry) {
         registry.addMapping("/**")
                 .allowedOrigins("*")
                 .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD")
                 .maxAge(360) // 6분 동안 캐시
                 .allowedHeaders("Authorization", "Cache-Control", "Content-Type");
     }
}
