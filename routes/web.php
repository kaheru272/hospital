<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\DoctorDashboardController;
use App\Http\Controllers\NurseDashboardController;
use App\Http\Controllers\ReceptionistDashboardController;
use App\Http\Controllers\PatientDashboardController;
use App\Http\Controllers\LandingPageController;

Route::get('/', [LandingPageController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/doctor-dashboard', function () {
        return Inertia::render('Dashboard/DoctorDashboard');
    })->name('doctor.dashboard');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/patient-dashboard', function () {
        return Inertia::render('Dashboard/PatientDashboard');
    })->name('patient.dashboard');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/nurse-dashboard', function () {
        return Inertia::render('Dashboard/NurseDashboard');
    })->name('nurse.dashboard');
});
Route::middleware(['auth'])->get('/admin-dashboard', function () {
    $user = \Illuminate\Support\Facades\Auth::user();
    if ($user && $user->role === 'Admin') {
        return Inertia::render('Dashboard/AdminDashboard');
    }
    abort(403);
})->name('admin.dashboard');

require __DIR__.'/auth.php';
