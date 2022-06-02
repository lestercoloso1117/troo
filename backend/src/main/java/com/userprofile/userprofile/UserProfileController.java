/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.userprofile.userprofile;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lester
 */

@RestController
public class UserProfileController {
    
    @PostMapping("/User/list")
    @CrossOrigin(origins="*")
    public UserProfileModel UserProfileModel(@RequestParam(value="id", defaultValue="0") Integer id){
        return new UserProfileModel(id);
    }
    

    
    
}
