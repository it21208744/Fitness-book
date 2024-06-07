package com.fitnessbook.fitnessbook.repositories;

import com.fitnessbook.fitnessbook.entities.comments;
import com.fitnessbook.fitnessbook.entities.mealPlanEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;


public interface CommentRepo extends MongoRepository<comments, String> { }
