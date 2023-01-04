package com.project.noted;

import com.project.noted.jpa.UserJpaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NotedApplication {
	public static void main(String[] args) {
		SpringApplication.run(NotedApplication.class, args);
	}
}
