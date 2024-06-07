package com.fitnessbook.fitnessbook.controller.mealPlans;


import com.fitnessbook.fitnessbook.entities.CurrentWorkOut;
import com.fitnessbook.fitnessbook.repositories.CurrentWorkOutRepository;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/currentworkOuts")

public class CurrentWorkOutController {

    private CurrentWorkOutRepository currentRepo;

    //build add currentworkout REST API
    @PostMapping
    public void createCurrentWorkOut(@RequestBody CurrentWorkOut currentWorkOutDto){
       currentRepo.save(currentWorkOutDto);
    }

    //Build Get CurrentWorkOut REST API
    @GetMapping ("{id}")
    public ResponseEntity<CurrentWorkOut> getCurrentWorkOutById(@PathVariable("id") String currentWorkOutId){
        Optional<CurrentWorkOut> Optworkout = currentRepo.findById(currentWorkOutId);
        CurrentWorkOut workout = Optworkout.get();
        return ResponseEntity.ok(workout);
    }

    //Build Get All CurrentWorkOut REST API
    @GetMapping
    public ResponseEntity <List<CurrentWorkOut>> getAllCurrentWorkOuts(){
        List<CurrentWorkOut> CurrentWorkOut = currentRepo.findAll();

        return new ResponseEntity<>(CurrentWorkOut, HttpStatus.OK);
    }

    //Build update CurrentWorkOut REST API
    @PutMapping("{id}")
    public ResponseEntity<CurrentWorkOut> updateCurrentWorkOut(@PathVariable("id") String currentWorkOutId,
                                                                  @RequestBody CurrentWorkOut updatedCurrentWorkOut){
        Optional<CurrentWorkOut> Optworkout = currentRepo.findById(currentWorkOutId);
        CurrentWorkOut workout = Optworkout.get();
        workout.setEmail(updatedCurrentWorkOut.getEmail());
        workout.setDistance(updatedCurrentWorkOut.getDistance());
        workout.setAge(updatedCurrentWorkOut.getAge());
        workout.setDistance(updatedCurrentWorkOut.getDistance());
        workout.setDiscription(updatedCurrentWorkOut.getDiscription());
        workout.setDate(updatedCurrentWorkOut.getDate());
        workout.setName(updatedCurrentWorkOut.getName());
        workout.setWeight(updatedCurrentWorkOut.getWeight());
        workout.setActivityType(updatedCurrentWorkOut.getActivityType());

        currentRepo.save(workout);
        return ResponseEntity.ok(workout);
    }

    //Build Delete CurrentWorkOut REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCurrentWorkOut(@PathVariable("id") String currentWorkOutId){
        Optional<CurrentWorkOut> Optworkout = currentRepo.findById(currentWorkOutId);
        if(Optworkout != null){
            currentRepo.deleteById(currentWorkOutId);
        }
        return  ResponseEntity.ok("Workout status deleted successfully!.");
    }


}
