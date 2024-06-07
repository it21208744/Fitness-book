package com.fitnessbook.fitnessbook.repositories;

import com.fitnessbook.fitnessbook.entities.userEnity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface userRepo extends MongoRepository<userEnity, String> {

    @Query("{'email': ?0}")
    Optional<userEnity> findByEmail(String email);
}
