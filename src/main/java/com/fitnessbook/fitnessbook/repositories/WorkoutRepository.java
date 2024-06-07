package com.fitnessbook.fitnessbook.repositories;

import com.fitnessbook.fitnessbook.entities.Workouts;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkoutRepository extends MongoRepository<Workouts, String> {
}
