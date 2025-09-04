package com.example.Final_Project_Backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

	public void addCorsMappings(CorsRegistry registry)
	{
		registry.addMapping("/api/**") //thus specifies the paths that will allow CORS
			.allowedOrigins("http://localhost:50955") //change this to frontend url
			.allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
			.allowedHeaders("*"); //allow headers
	}	
	
}
