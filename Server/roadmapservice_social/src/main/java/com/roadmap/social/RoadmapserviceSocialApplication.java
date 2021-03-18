package com.roadmap.social;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class RoadmapserviceSocialApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoadmapserviceSocialApplication.class, args);
	}

}
