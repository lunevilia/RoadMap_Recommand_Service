package com.roadmap.board;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class RoadmapserviceBoardApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoadmapserviceBoardApplication.class, args);
	}

}
