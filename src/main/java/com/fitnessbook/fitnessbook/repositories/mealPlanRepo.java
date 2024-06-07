package com.fitnessbook.fitnessbook.repositories;

import com.fitnessbook.fitnessbook.entities.mealPlanEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;

import java.util.List;


public interface mealPlanRepo extends MongoRepository<mealPlanEntity, String> {
    @Query("{'userEmail': ?0}")
    List<mealPlanEntity> findByUserEmail(String userEmail);
}
