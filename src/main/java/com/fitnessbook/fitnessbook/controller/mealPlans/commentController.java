package com.fitnessbook.fitnessbook.controller.mealPlans;

import com.fitnessbook.fitnessbook.entities.comments;
import com.fitnessbook.fitnessbook.entities.mealPlanEntity;
import com.fitnessbook.fitnessbook.repositories.CommentRepo;
import com.fitnessbook.fitnessbook.repositories.mealPlanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class commentController {

    @Autowired
    private CommentRepo commentRepo;


    @GetMapping("/api/v1/comments")
    public ResponseEntity<List<comments>> getcomments() {
        List<comments> commentList = commentRepo.findAll();
        if (!commentList.isEmpty()) {
            return new ResponseEntity<>(commentList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/api/v1/mealplans/{id}")
//    public ResponseEntity<mealPlanEntity> getSinglePlan(@PathVariable String id) {
//        Optional<mealPlanEntity> optionalMealPlan = mealPlanrepo.findById(id);
//        if (optionalMealPlan.isPresent()) {
//            mealPlanEntity mealPlan = optionalMealPlan.get();
//            return new ResponseEntity<>(mealPlan, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping("/api/v1/comments")
    public ResponseEntity<String> addComment(@RequestParam String comment) {

            comments newcomment = new comments();
            newcomment.setComment(comment);

            commentRepo.save(newcomment);
            return new ResponseEntity<>("Meal plan added successfully", HttpStatus.OK);
    }



    @PutMapping("/api/v1/comments/{id}")
    public ResponseEntity<String> updateComment(@RequestParam String comment, @PathVariable String id) {

        Optional<comments> oldComment = commentRepo.findById(id);
        comments Updatedcomment = oldComment.get();
        Updatedcomment.setComment(comment);


        commentRepo.save(Updatedcomment);
        return new ResponseEntity<>("Meal plan updated successfully", HttpStatus.OK);
    }
//
    @DeleteMapping("/api/v1/comments/{id}")
    public ResponseEntity<String> deletecomment(@PathVariable String id) {
        Optional<comments> Optcomment = commentRepo.findById(id);
        if (Optcomment.isPresent()) {
            commentRepo.deleteById(id);
            return new ResponseEntity<>("Comment deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Comment not found", HttpStatus.NOT_FOUND);
        }
    }
//
//

//
}
