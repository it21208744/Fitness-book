package com.fitnessbook.fitnessbook.repositories;

import com.fitnessbook.fitnessbook.entities.CurrentWorkOut;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface CurrentWorkOutRepository extends MongoRepository<CurrentWorkOut, String> {
}
