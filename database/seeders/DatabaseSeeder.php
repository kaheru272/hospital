<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Example users for each role
        \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@hospital.com',
            'role' => 'Admin',
            'password' => bcrypt('password'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Doctor User',
            'email' => 'doctor@hospital.com',
            'role' => 'Doctor',
            'password' => bcrypt('password'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Nurse User',
            'email' => 'nurse@hospital.com',
            'role' => 'Nurse',
            'password' => bcrypt('password'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Receptionist User',
            'email' => 'receptionist@hospital.com',
            'role' => 'Receptionist',
            'password' => bcrypt('password'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Patient User',
            'email' => 'patient@hospital.com',
            'role' => 'Patient',
            'password' => bcrypt('password'),
        ]);
    }
}
