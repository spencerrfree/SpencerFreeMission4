using Microsoft.AspNetCore.Mvc;
using SpencerFreeMission4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpencerFreeMission4.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            
            /*throw new IndexOutOfRangeException();*/
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
