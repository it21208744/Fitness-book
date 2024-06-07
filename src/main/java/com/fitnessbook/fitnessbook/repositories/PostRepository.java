package com.fitnessbook.fitnessbook.repositories;



import com.fitnessbook.fitnessbook.entities.Post;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface PostRepository extends MongoRepository<Post, String> {
}



