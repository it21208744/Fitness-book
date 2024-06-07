package com.fitnessbook.fitnessbook.controller.mealPlans;

import com.fitnessbook.fitnessbook.entities.mealPlanEntity;
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
public class mealPlanController {

    @Autowired
    private mealPlanRepo mealPlanrepo;


    @GetMapping("/api/v1/mealplans")
    public ResponseEntity<List<mealPlanEntity>> getMealPlans() {
        List<mealPlanEntity> mealPlans = mealPlanrepo.findAll();
        if (!mealPlans.isEmpty()) {
            return new ResponseEntity<>(mealPlans, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/v1/mealplans/{id}")
    public ResponseEntity<mealPlanEntity> getSinglePlan(@PathVariable String id) {
        Optional<mealPlanEntity> optionalMealPlan = mealPlanrepo.findById(id);
        if (optionalMealPlan.isPresent()) {
            mealPlanEntity mealPlan = optionalMealPlan.get();
            return new ResponseEntity<>(mealPlan, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/api/v1/mealplans")
    public ResponseEntity<String> addMealPlan(
            @RequestHeader("userEmail") String userEmail,
            @RequestParam("category") String category,
            @RequestParam("imageData") MultipartFile imageData,
            @RequestParam("instructions") String instructions,
            @RequestParam("nutritions") String nutritions,
            @RequestParam("planName") String planName,
            @RequestParam("recipes") String recipes) {
        try {
            mealPlanEntity mealPlan = new mealPlanEntity();
            mealPlan.setPlanName(planName);
            mealPlan.setRecipes(recipes);
            mealPlan.setCategory(category);
            mealPlan.setImageData(imageData.getBytes());
            mealPlan.setInstructions(instructions);
            mealPlan.setNutritions(nutritions);
            mealPlan.setUserEmail(userEmail);

            mealPlanrepo.save(mealPlan);
            return new ResponseEntity<>("Meal plan added successfully", HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
            // Handle the exception, perhaps by returning an error response
        }
    }



    @PutMapping("/api/v1/mealplans/{id}")
    public ResponseEntity<String> updateMealPlan(@RequestBody mealPlanEntity updatedMealPlan, @PathVariable String id) {
        Optional<mealPlanEntity> optionalMealPlan = mealPlanrepo.findById(id);
        if (optionalMealPlan.isPresent()) {
            mealPlanEntity mealPlan = optionalMealPlan.get();
            // Update meal plan fields with new values
            mealPlan.setPlanName(updatedMealPlan.getPlanName());
            mealPlan.setCategory(updatedMealPlan.getCategory());
            mealPlan.setRecipes(updatedMealPlan.getRecipes());
            mealPlan.setNutritions(updatedMealPlan.getNutritions());
            mealPlan.setInstructions(updatedMealPlan.getInstructions());
            mealPlan.setImageData(updatedMealPlan.getImageData());
            // Update other fields as needed
            mealPlanrepo.save(mealPlan); // Save the updated meal plan
            return new ResponseEntity<>("Meal plan updated successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Meal plan not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/v1/mealplans/{id}")
    public ResponseEntity<String> deleteMealPlan(@PathVariable String id) {
        Optional<mealPlanEntity> optionalMealPlan = mealPlanrepo.findById(id);
        if (optionalMealPlan.isPresent()) {
            mealPlanrepo.deleteById(id);
            return new ResponseEntity<>("Meal plan deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Meal plan not found", HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/api/v1/getMealplansByEmail")
    public ResponseEntity<List<mealPlanEntity>> getMealPlans(@RequestHeader("userEmail") String userEmail) {
        List<mealPlanEntity> mealPlans = mealPlanrepo.findByUserEmail(userEmail); // Assuming a method findByUserEmail exists in mealPlanrepo
        if (!mealPlans.isEmpty()) {
            return new ResponseEntity<>(mealPlans, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
