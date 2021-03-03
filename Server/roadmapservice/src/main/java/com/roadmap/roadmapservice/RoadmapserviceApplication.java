package com.roadmap.roadmapservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class RoadmapserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoadmapserviceApplication.class, args);
	}

}
