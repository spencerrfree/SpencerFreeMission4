using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SpencerFreeMission4.Models
{
    public class GradeCalculatorModel
    {
        //Make sure each category has an entry
        [Required]
        //Set the input range to be between 0 and 100 % for each variable
        [Range(0,100)]


        //Create Getters & Setters for each variable
        public int assignments { get; set; }

        [Range(0, 100)]
        public int group { get; set; }

        [Range(0, 100)]
        public int quizzes { get; set; }

        [Range(0, 100)]
        public int midterm { get; set; }

        [Range(0, 100)]
        public int final { get; set; }

        [Range(0, 100)]
        public int intex { get; set; }

        [Range(0, 100)]
        public string output { get; set; }
    }

}
