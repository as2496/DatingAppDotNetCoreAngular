using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDtocs
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(8, MinimumLength=4,ErrorMessage="Password must be specified between 4 and 8 characters")]
        public string Password { get; set; }
    }
}