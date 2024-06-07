package com.fitnessbook.fitnessbook.entities;



import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class CurrentWorkOut {
    @Id
    private String id;
     private String name;
     private String email;
     private String age;
     private String date;
     private String activityType;
     private String distance;
     private Integer noOfPushups;
     private String weight;
     private String discription;
}
