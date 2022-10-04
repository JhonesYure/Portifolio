using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PortifolioPro.Models
{
    public class DatabaseService
    {
        public int CadastroContato (Contato contato)
        {
            using(var context = new DatabaseContext())
            {
                context.Add(contato);
                context.SaveChanges();
                return contato.Id;
            }
        }
    }
}